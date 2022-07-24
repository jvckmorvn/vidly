import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.path = path;
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc") {
      return <i className="fa-solid fa-sort-up" />;
    } else {
      return <i className="fa-solid fa-sort-down" />;
    }
  };

  render() {
    const style = {
      cursor: "pointer",
    };

    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={style}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
