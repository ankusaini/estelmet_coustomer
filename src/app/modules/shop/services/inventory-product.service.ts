import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { takeUntil, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryProductService implements OnDestroy {

  private destroy$: Subject<void> = new Subject();

  private itemsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private onAddingSubject$: Subject<Product> = new Subject();

  readonly items$: Observable<Product[]> = this.itemsSubject$.pipe(takeUntil(this.destroy$));
  readonly count$: Observable<number> = this.itemsSubject$.pipe(map(items => items.length));
  readonly onAdding$: Observable<Product> = this.onAddingSubject$.asObservable();

  constructor() { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
