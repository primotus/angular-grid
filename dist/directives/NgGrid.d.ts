import { ElementRef, Renderer2, EventEmitter, ComponentFactoryResolver, KeyValueDiffers, OnInit, OnDestroy, DoCheck } from "@angular/core";
import { NgGridConfig, NgGridItemEvent, NgGridItemPosition, NgGridItemSize } from "../interfaces/INgGrid";
import { NgGridItem } from "./NgGridItem";
import * as i0 from "@angular/core";
export declare class NgGrid implements OnInit, DoCheck, OnDestroy {
    private _differs;
    private _ngEl;
    private _renderer;
    private componentFactoryResolver;
    static CONST_DEFAULT_RESIZE_DIRECTIONS: string[];
    onDragStart: EventEmitter<NgGridItem>;
    onDrag: EventEmitter<NgGridItem>;
    onDragStop: EventEmitter<NgGridItem>;
    onResizeStart: EventEmitter<NgGridItem>;
    onResize: EventEmitter<NgGridItem>;
    onResizeStop: EventEmitter<NgGridItem>;
    onItemChange: EventEmitter<NgGridItemEvent[]>;
    colWidth: number;
    rowHeight: number;
    minCols: number;
    minRows: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    screenMargin: number;
    isDragging: boolean;
    isResizing: boolean;
    autoStyle: boolean;
    resizeEnable: boolean;
    dragEnable: boolean;
    cascade: string;
    minWidth: number;
    minHeight: number;
    resizeDirections: string[];
    private _items;
    private _draggingItem;
    private _resizingItem;
    private _resizeDirection;
    private _itemsInGrid;
    private _maxCols;
    private _maxRows;
    private _visibleCols;
    private _visibleRows;
    private _posOffset;
    private _placeholderRef;
    private _fixToGrid;
    private _autoResize;
    private _differ;
    private _destroyed;
    private _maintainRatio;
    private _aspectRatio;
    private _preferNew;
    private _zoomOnDrag;
    private _limitToScreen;
    private _centerToScreen;
    private _curMaxRow;
    private _curMaxCol;
    private _dragReady;
    private _resizeReady;
    private _elementBasedDynamicRowHeight;
    private _itemFixDirection;
    private _collisionFixDirection;
    private _allowOverlap;
    private _cascadePromise;
    private _lastZValue;
    private _documentMousemove$;
    private _documentMouseup$;
    private _mousedown$;
    private _mousemove$;
    private _mouseup$;
    private _touchstart$;
    private _touchmove$;
    private _touchend$;
    private _subscriptions;
    private _enabledListener;
    private static CONST_DEFAULT_CONFIG;
    private _config;
    set config(v: NgGridConfig);
    constructor(_differs: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    generateItemUid(): string;
    setConfig(config: NgGridConfig): void;
    getItemPosition(itemId: string): NgGridItemPosition;
    getItemSize(itemId: string): NgGridItemSize;
    ngDoCheck(): boolean;
    setMargins(margins: string[]): void;
    enableDrag(): void;
    disableDrag(): void;
    enableResize(): void;
    disableResize(): void;
    addItem(ngItem: NgGridItem): void;
    removeItem(ngItem: NgGridItem): void;
    updateItem(ngItem: NgGridItem): void;
    triggerCascade(): Promise<void>;
    triggerResize(): void;
    resizeEventHandler(e: any): void;
    mouseDownEventHandler(e: MouseEvent | TouchEvent): void;
    mouseUpEventHandler(e: MouseEvent | TouchEvent): void;
    mouseMoveEventHandler(e: MouseEvent | TouchEvent): void;
    private _getFixDirectionFromCascade;
    private _updatePositionsAfterMaxChange;
    private _calculateColWidth;
    private _calculateRowHeight;
    private _updateRatio;
    private _applyChanges;
    private _resizeStart;
    private _dragStart;
    private _zoomOut;
    private _resetZoom;
    private _drag;
    private _resize;
    private _dragStop;
    private _resizeStop;
    private _cleanDrag;
    private _cleanResize;
    private _calculateGridSize;
    private _calculateGridPosition;
    private _hasGridCollision;
    private _getCollisions;
    private _fixGridCollisions;
    private _cascadeGrid;
    private _fixGridPosition;
    private _getNextFittingRow;
    private _getNextFittingCol;
    private _getItemsInHorizontalPath;
    private _getItemsInVerticalPath;
    private _isWithinBoundsX;
    private _fixPosToBoundsX;
    private _fixSizeToBoundsX;
    private _isWithinBoundsY;
    private _fixPosToBoundsY;
    private _fixSizeToBoundsY;
    private _isWithinBounds;
    private _fixPosToBounds;
    private _fixSizeToBounds;
    private _addToGrid;
    private _removeFromGrid;
    private _updateSize;
    private _getMaxRow;
    private _getMaxCol;
    private _getMousePosition;
    private _getAbsoluteMousePosition;
    private _getContainerColumns;
    private _getContainerRows;
    private _getScreenMargin;
    private _getItemFromPosition;
    private _createPlaceholder;
    private _emitOnItemChange;
    private _defineListeners;
    private _enableListeners;
    private _disableListeners;
    private _isTouchDevice;
    private _enableTouchListeners;
    private _enableMouseListeners;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgGrid, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgGrid, "[ngGrid]", never, { "config": "ngGrid"; }, { "onDragStart": "onDragStart"; "onDrag": "onDrag"; "onDragStop": "onDragStop"; "onResizeStart": "onResizeStart"; "onResize": "onResize"; "onResizeStop": "onResizeStop"; "onItemChange": "onItemChange"; }, never>;
}
