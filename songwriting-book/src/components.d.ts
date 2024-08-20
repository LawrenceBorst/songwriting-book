/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Icon } from "./components/icon/types";
import { NavBarMode, NavButton } from "./components/sidebar/types";
import { Platform } from "./platform/types";
export { Icon } from "./components/icon/types";
export { NavBarMode, NavButton } from "./components/sidebar/types";
export { Platform } from "./platform/types";
export namespace Components {
    /**
     * Topmost component in the document
     */
    interface SbApplication {
    }
    /**
     * The main body of the book, containing the text
     */
    interface SbBody {
        /**
          * The platform, functioning as a global key value store
          * @inheritdoc
         */
        "platform": any;
    }
    /**
     * A wrapper for material icons
     */
    interface SbIcon {
        /**
          * Icon to be rendered
         */
        "icon": Icon;
    }
    interface SbIconBar {
        /**
          * Buttons available in the icon bar
         */
        "buttons": NavButton[];
    }
    interface SbSidebar {
        /**
          * The platform, functioning as a global key value store
          * @inheritdoc
         */
        "platform": Platform;
    }
    interface SbSidebarContent {
        /**
          * The current navigation mode to be displayed
         */
        "mode": NavBarMode;
    }
    interface SbSidebarContents {
    }
    interface SbSidebarSearch {
    }
}
export interface SbIconBarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSbIconBarElement;
}
declare global {
    /**
     * Topmost component in the document
     */
    interface HTMLSbApplicationElement extends Components.SbApplication, HTMLStencilElement {
    }
    var HTMLSbApplicationElement: {
        prototype: HTMLSbApplicationElement;
        new (): HTMLSbApplicationElement;
    };
    /**
     * The main body of the book, containing the text
     */
    interface HTMLSbBodyElement extends Components.SbBody, HTMLStencilElement {
    }
    var HTMLSbBodyElement: {
        prototype: HTMLSbBodyElement;
        new (): HTMLSbBodyElement;
    };
    /**
     * A wrapper for material icons
     */
    interface HTMLSbIconElement extends Components.SbIcon, HTMLStencilElement {
    }
    var HTMLSbIconElement: {
        prototype: HTMLSbIconElement;
        new (): HTMLSbIconElement;
    };
    interface HTMLSbIconBarElementEventMap {
        "selection": NavButton | null;
    }
    interface HTMLSbIconBarElement extends Components.SbIconBar, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSbIconBarElementEventMap>(type: K, listener: (this: HTMLSbIconBarElement, ev: SbIconBarCustomEvent<HTMLSbIconBarElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSbIconBarElementEventMap>(type: K, listener: (this: HTMLSbIconBarElement, ev: SbIconBarCustomEvent<HTMLSbIconBarElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSbIconBarElement: {
        prototype: HTMLSbIconBarElement;
        new (): HTMLSbIconBarElement;
    };
    interface HTMLSbSidebarElement extends Components.SbSidebar, HTMLStencilElement {
    }
    var HTMLSbSidebarElement: {
        prototype: HTMLSbSidebarElement;
        new (): HTMLSbSidebarElement;
    };
    interface HTMLSbSidebarContentElement extends Components.SbSidebarContent, HTMLStencilElement {
    }
    var HTMLSbSidebarContentElement: {
        prototype: HTMLSbSidebarContentElement;
        new (): HTMLSbSidebarContentElement;
    };
    interface HTMLSbSidebarContentsElement extends Components.SbSidebarContents, HTMLStencilElement {
    }
    var HTMLSbSidebarContentsElement: {
        prototype: HTMLSbSidebarContentsElement;
        new (): HTMLSbSidebarContentsElement;
    };
    interface HTMLSbSidebarSearchElement extends Components.SbSidebarSearch, HTMLStencilElement {
    }
    var HTMLSbSidebarSearchElement: {
        prototype: HTMLSbSidebarSearchElement;
        new (): HTMLSbSidebarSearchElement;
    };
    interface HTMLElementTagNameMap {
        "sb-application": HTMLSbApplicationElement;
        "sb-body": HTMLSbBodyElement;
        "sb-icon": HTMLSbIconElement;
        "sb-icon-bar": HTMLSbIconBarElement;
        "sb-sidebar": HTMLSbSidebarElement;
        "sb-sidebar-content": HTMLSbSidebarContentElement;
        "sb-sidebar-contents": HTMLSbSidebarContentsElement;
        "sb-sidebar-search": HTMLSbSidebarSearchElement;
    }
}
declare namespace LocalJSX {
    /**
     * Topmost component in the document
     */
    interface SbApplication {
    }
    /**
     * The main body of the book, containing the text
     */
    interface SbBody {
        /**
          * The platform, functioning as a global key value store
          * @inheritdoc
         */
        "platform"?: any;
    }
    /**
     * A wrapper for material icons
     */
    interface SbIcon {
        /**
          * Icon to be rendered
         */
        "icon"?: Icon;
    }
    interface SbIconBar {
        /**
          * Buttons available in the icon bar
         */
        "buttons"?: NavButton[];
        /**
          * Emitted when a navigation button is clicked
         */
        "onSelection"?: (event: SbIconBarCustomEvent<NavButton | null>) => void;
    }
    interface SbSidebar {
        /**
          * The platform, functioning as a global key value store
          * @inheritdoc
         */
        "platform"?: Platform;
    }
    interface SbSidebarContent {
        /**
          * The current navigation mode to be displayed
         */
        "mode"?: NavBarMode;
    }
    interface SbSidebarContents {
    }
    interface SbSidebarSearch {
    }
    interface IntrinsicElements {
        "sb-application": SbApplication;
        "sb-body": SbBody;
        "sb-icon": SbIcon;
        "sb-icon-bar": SbIconBar;
        "sb-sidebar": SbSidebar;
        "sb-sidebar-content": SbSidebarContent;
        "sb-sidebar-contents": SbSidebarContents;
        "sb-sidebar-search": SbSidebarSearch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * Topmost component in the document
             */
            "sb-application": LocalJSX.SbApplication & JSXBase.HTMLAttributes<HTMLSbApplicationElement>;
            /**
             * The main body of the book, containing the text
             */
            "sb-body": LocalJSX.SbBody & JSXBase.HTMLAttributes<HTMLSbBodyElement>;
            /**
             * A wrapper for material icons
             */
            "sb-icon": LocalJSX.SbIcon & JSXBase.HTMLAttributes<HTMLSbIconElement>;
            "sb-icon-bar": LocalJSX.SbIconBar & JSXBase.HTMLAttributes<HTMLSbIconBarElement>;
            "sb-sidebar": LocalJSX.SbSidebar & JSXBase.HTMLAttributes<HTMLSbSidebarElement>;
            "sb-sidebar-content": LocalJSX.SbSidebarContent & JSXBase.HTMLAttributes<HTMLSbSidebarContentElement>;
            "sb-sidebar-contents": LocalJSX.SbSidebarContents & JSXBase.HTMLAttributes<HTMLSbSidebarContentsElement>;
            "sb-sidebar-search": LocalJSX.SbSidebarSearch & JSXBase.HTMLAttributes<HTMLSbSidebarSearchElement>;
        }
    }
}
