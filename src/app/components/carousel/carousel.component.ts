import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  AfterContentInit,
  signal,
  computed,
  effect,
  inject,
  ElementRef,
  PLATFORM_ID,
  contentChildren,
  input,
} from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [NgClass],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input({ required: true }) itemCount!: number;

  @Input() showButtons = true;
  @Input() autoplay = false;
  @Input() autoplayInterval = 5000;

  private platformId = inject(PLATFORM_ID);
  private hostEl = inject(ElementRef<HTMLElement>);
  private timer: ReturnType<typeof setInterval> | null = null;
  private resizeObserver: ResizeObserver | null = null;

  visibleCount = signal(1);
  currentIndex = signal(0);

  /** Effektive Item-Anzahl: aus Direktiven oder manuellem Input */
  private effectiveItemCount = computed(() => {
    return this.itemCount;
  });

  trackTransform = computed(() => {
    const pct = 100 / this.visibleCount();
    return `translateX(-${this.currentIndex() * pct}%)`;
  });

  maxIndex = computed(() => Math.max(0, this.effectiveItemCount() - this.visibleCount()));

  dotRange = computed(() => Array.from({ length: this.maxIndex() + 1 }));

  canGoPrev = computed(() => this.currentIndex() > 0);
  canGoNext = computed(() => this.currentIndex() < this.maxIndex());

  constructor() {
    effect(() => {
      if (this.currentIndex() > this.maxIndex()) {
        this.currentIndex.set(this.maxIndex());
      }
    });
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? window.innerWidth;
      this.visibleCount.set(this.breakpoint(width));
    });
    this.resizeObserver.observe(this.hostEl.nativeElement);
    this.visibleCount.set(this.breakpoint(this.hostEl.nativeElement.offsetWidth));

    this.startAutoplay();
  }

  ngAfterContentInit() {
    // Slides setzen ihre Breite automatisch via Direktive
  }

  ngOnDestroy() {
    this.stopAutoplay();
    this.resizeObserver?.disconnect();
  }

  goTo(index: number) {
    this.currentIndex.set(Math.min(Math.max(0, index), this.maxIndex()));
    this.restartAutoplay();
  }

  next() {
    if (this.canGoNext()) {
      this.currentIndex.update((i) => i + 1);
      this.restartAutoplay();
    }
  }

  prev() {
    if (this.canGoPrev()) {
      this.currentIndex.update((i) => i - 1);
      this.restartAutoplay();
    }
  }

  private breakpoint(width: number): number {
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  }

  private startAutoplay() {
    if (!this.autoplay || this.autoplayInterval <= 0) return;
    this.timer = setInterval(() => {
      this.canGoNext() ? this.currentIndex.update((i) => i + 1) : this.currentIndex.set(0);
    }, this.autoplayInterval);
  }

  private stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
