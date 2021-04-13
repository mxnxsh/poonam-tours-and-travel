import React, { forwardRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable from 'material-table';

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import RefreshIcon from '@material-ui/icons/Refresh';

import { removeEntryFromBill } from '../actions/billActions';
import { createBill } from '../actions/createBillActions';

const BillScreen = props => {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const bill = useSelector(state => state.bill);
  const { billItems } = bill;

  const toPrice = num => Number(Math.round(num));
  bill.totalKMS = toPrice(
    billItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.extraKMS * 14,
      0
    )
  );
  bill.totalHRS = toPrice(
    billItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.extraHRS * 100,
      0
    )
  );
  bill.bPrice = billItems.reduce(
    (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue.basePrice),
    0
  );
  bill.subTotal = bill.totalHRS + bill.totalKMS + bill.bPrice;

  const dispatch = useDispatch();

  const billSaveHandler = () => {
    dispatch(createBill({ ...bill, bills: billItems }));
  };
  const removeBillHandler = id => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(removeEntryFromBill(id));
    }
  };
  const tableRef = createRef();

  return (
    <>
      <div className='row top'>
        <div className='col-2'>
          <h1>Bill Screen</h1>
          {billItems.length === 0 ? (
            <p>
              No Bill. <Link to='/admin/show-entries'>Create Bill</Link>
            </p>
          ) : (
            <div id='tableStyle'>
              <MaterialTable
                icons={tableIcons}
                columns={[
                  {
                    title: 'Name',
                    field: 'name',
                    customFilterAndSearch: (term, rowData) =>
                      term === rowData.name.length,
                  },
                  { title: 'Vehicle-Number', field: 'number' },
                  { title: 'To-and-From', field: 'location' },
                  { title: 'Base-Price', field: 'basePrice' },
                  { title: 'Show', field: 'show' },
                  { title: 'Booked-by', field: 'book' },
                  { title: 'Extra-HRS', field: 'extraHRS' },
                  { title: 'Extra-KMS', field: 'extraKMS' },
                  { title: 'Date', field: 'startDate' },
                ]}
                data={billItems}
                title='Bill Screen'
                actions={[
                  {
                    icon: () => <RefreshIcon fontSize='large' />,
                    tooltip: 'Refresh Data',
                    isFreeAction: true,
                    onClick: () =>
                      tableRef.current && tableRef.current.onQueryChange(),
                  },
                  {
                    icon: () => (
                      <DeleteIcon color='secondary' fontSize='large' />
                    ),
                    iconProps: {},
                    tooltip: 'Delete',
                    onClick: (event, rowData) => {
                      removeBillHandler(rowData.entry);
                    },
                  },
                ]}
                options={{
                  search: true,
                  actionsColumnIndex: -1,
                  headerStyle: {
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  },
                  actionsCellStyle: {
                    fontSize: '2rem',
                  },
                  draggable: false,
                  exportButton: true,
                  exportFileName: 'manish',
                  // filtering: true,
                  paging: false,
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className='row center'>
        <div className='card card-body'>
          <ul>
            <li>
              <button
                type='button'
                onClick={billSaveHandler}
                className='primary block'
                disabled={billItems.length === 0 ? true : false}
              >
                Save Bill
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BillScreen;
