# navigation-bar



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description                                           | Type                     | Default     |
| ---------- | --------- | ----------------------------------------------------- | ------------------------ | ----------- |
| `mode`     | `mode`    | The current navigation mode to be displayed           | `"contents" \| "search"` | `undefined` |
| `platform` | --        | The platform, functioning as a global key value store | `Platform`               | `undefined` |


## Dependencies

### Used by

 - [sb-sidebar](.)

### Depends on

- [sb-sidebar-contents](sidebar-modes)
- [sb-sidebar-search](sidebar-modes)

### Graph
```mermaid
graph TD;
  sb-sidebar-content --> sb-sidebar-contents
  sb-sidebar-content --> sb-sidebar-search
  sb-sidebar --> sb-sidebar-content
  style sb-sidebar-content fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
