import * as React from 'react';
import DataTable from "react-data-table-component";

const customStyles = {
    headCells: {
        style: {
            backgroundColor: "white",
            fontSize: "12px",
            // paddingLeft: "0 8rem",
            // justifyContent: "center",
            borderTop: "solid",
            borderColor: "#2C28281C",
            borderWidth: "1px",
            fontWeight: "600",
            color: "#98a9c9"
        },
    },
    cells: {
        style: {
            fontSize: "12px",
            borderColor: "rgba(0,0,0,.12)",
            borderWidth: "1px",
            cursor: "pointer",
            textAlign: "center",
            padding: "0 !important",
            margin: 0,
            color: "#0B90F6"
        },
    },
}


const handleRowClicked = row => {
    return ({
        ...row,
        toggle: !row.toggle,

    });
}

const DashboardComponent = () => {
    const data = [
        {
            id: 1,
            title: 'film1',
            year: '1982',
            item: "item1",
            toggle: false,

        }, {
            id: 2,
            title: 'film2',
            year: '1988',
            item: "item2",
            toggle: false,

        }, {
            id: 3,
            title: 'film3',
            year: '1992',
            item: "item3",
            toggle: false,

        }, {
            id: 4,
            title: 'film4',
            year: '1952',
            item: "item4",
            toggle: false,

        }, {
            id: 5,
            title: 'film5',
            year: '1994',
            item: "item5",
            toggle: false,
        },
    ];
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
            right: true,
        },
        {
            name: 'Item',
            selector: row => row.item,
            sortable: true,
            right: true,
        },
    ];

    const conditionalRowStyles = [
        {
            when: (row) => row.toggle,
            style: {
                userSelect: "none",
                borderLeft: "solid #365AB4"
            },
        },
        {
            when: (row) => row.isDisabled,
            style: {
                pointerEvents: "none",
                opacity: "0.4"
            },
        },
    ];
    return <div style={{ height: 400, width: '50%', padding: "2rem" }}>
        <DataTable
            onRowClicked={handleRowClicked}
            title=""
            // expandableRows={true}
            pagination={true}
            columns={columns}
            data={data}
            customStyles={customStyles}
            filter={true}
            // clearSelectedRows={true}
            conditionalRowStyles={conditionalRowStyles}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15]}
        />
    </div>
}

export default DashboardComponent;