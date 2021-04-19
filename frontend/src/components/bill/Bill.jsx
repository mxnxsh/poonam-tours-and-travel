import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  DataTableCell,
} from '@david.kucsai/react-pdf-table';

const Bill = ({ bill }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.invoice} fixed>
        INVOICE
      </Text>
      <Text style={styles.header} fixed>
        POONAM TOURS & TRAVEL
      </Text>
      <View style={styles.addressContainer}>
        <Text style={styles.address} fixed>
          349, ADARSH NAGAR, NEW LINK ROAD, JOGESHWARI (W) MUMBAI-400 102
        </Text>
        <Text style={styles.address} fixed>
          MOB-9833700761 PAN NO-AIMPK7850M SAC NO: 9964 GSTIN 27AJMPK7850M1ZH
        </Text>
      </View>
      <View style={styles.table}>
        <View style={[styles.row, styles.header1]}>
          <Text style={[styles.headerText, styles.cell]}>
            M/S SINGRO MEDIA INNOVATIONS PRIVATE LIMITED
          </Text>
          <Text style={[styles.headerText, styles.cell]}></Text>
          <Text style={[styles.headerText, styles.cell, styles.IPadding]}>
            INVOICE NO - TE 461
          </Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={[styles.row, styles.header1]}>
          <Text style={[styles.headerText, styles.cell]}>
            B-915 SAMARTH AISHWARIYA APARTMENT, LOIN SOLE MARG
          </Text>
          <Text style={[styles.headerText, styles.cell]}></Text>
          <Text style={[styles.headerText, styles.cell, styles.DRight]}>
            DATE - 29/12/2020
          </Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={[styles.row, styles.header1]}>
          <Text style={[styles.headerText, styles.cell]}>
            OPPOSITE HIGH LAND PARK OSHIWARA ANDHERI WEST MUM 400102
          </Text>
          <Text style={[styles.headerText, styles.cell]}></Text>
          <Text style={[styles.headerText, styles.cell]}>
            PROJECT- GUILTY MINDS
          </Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={[styles.row, styles.header1]}>
          <Text style={[styles.headerText, styles.cell]}>
            GSTIN - 27AJMPK7850M1ZH
          </Text>
          <Text style={[styles.headerText, styles.cell]}></Text>
          <Text style={[styles.headerText, styles.cell, styles.bPadding]}>
            BOOK BY - NILESH SIR
          </Text>
        </View>
      </View>
      {/* <Table style={{ margin: 10 }}>
        <TableHeader textAlign={'center'}>
          <TableCell weighting={0.3}>SR.NO</TableCell>
          <TableCell>DESCRIPTION</TableCell>
          <TableCell>DAY/HR/KMS</TableCell>
          <TableCell>RATE</TableCell>
          <TableCell>AMOUNT</TableCell>
        </TableHeader>
      </Table> */}
      <View style={styles.table}>
        <View style={[styles.row, styles.header1]}>
          <Text style={[styles.headerText, styles.cell]}>SR.NO</Text>
          <Text style={[styles.headerText, styles.cell]}>DESCRIPTION</Text>
          <Text style={[styles.headerText, styles.cell]}>DAY/HR/KMS</Text>
          <Text style={[styles.headerText, styles.cell]}>RATE</Text>
          <Text style={[styles.headerText, styles.cell]}>AMOUNT</Text>
        </View>
      </View>

      {/* <Table data={bill.bills}>
        <TableBody>
          {console.log(bill.bills)}
          <DataTableCell getContent={x => x.bill.number} />
          <DataTableCell getContent={x => x.bill.location} />
          <DataTableCell getContent={x => x.bill.extraKMS} />
          <DataTableCell getContent={x => x.bill.extraHRS} />
          <DataTableCell getContent={x => x.bill.basePrice} />
        </TableBody>
      </Table> */}
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
  },
  addressContainer: {
    textAlign: 'center',
    borderTop: ' 1px solid black',
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
  },
  addressContainer2: {
    border: '1px solid black',
  },
  header: {
    fontSize: 25,
    marginBottom: -1,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    border: '1px solid black',
  },
  invoice: {
    fontSize: 18,
    marginBottom: -1,
    textAlign: 'center',
    padding: 4,
    color: 'black',
    fontWeight: 'bold',
    border: '1px solid black',
  },
  address: {
    fontSize: 12,
    marginBottom: -1,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  footer: {
    padding: '100px',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  // 2nd address design
  table: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    marginTop: -1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 22,
  },
  cell: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'stretch',
  },
  header1: {
    border: '1px solid black',
    marginTop: -1,
  },
  headerText: {
    fontSize: 10,
    fontWeight: 1200,
    color: 'black',
    margin: 5,
  },
  tableText: {
    margin: 5,
    fontSize: 10,
    color: 'neutralDark',
  },
  bPadding: {
    paddingLeft: 180,
  },
  DRight: {
    paddingRight: 17,
  },
  IPadding: {
    paddingLeft: 40,
  },
});

export default Bill;
