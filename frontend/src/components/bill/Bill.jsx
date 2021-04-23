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
      {/* <Text style={styles.invoice} fixed>
        INVOICE
      </Text> */}
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
      <View
        style={{
          ...styles.flex,
          fontSize: '11px',
          margin: '10px 0',
        }}
      >
        <View
          style={{
            width: '60%',
            lineHeight: 1.5,
          }}
        >
          <Text>
            349, ADARSH NAGAR, NEW LINK ROAD, JOGESHWARI (W) MUMBAI-400 102
            MOB-9833700761 PAN NO-AIMPK7850M SAC NO: 9964
          </Text>
          <Text>GSTIN:- 27AJMPK7850M1ZH</Text>
        </View>
        <View style={{ width: '10%', lineHeight: 1.5 }}></View>
        <View style={{ width: '30%', lineHeight: 1.5 }}>
          <Text style={{ fontSize: '11px', marginLeft: '10px' }}>
            INVOICE NO:- TP 569
          </Text>
          <Text style={{ fontSize: '11px', marginLeft: '10px' }}>
            DATE:- 20/12/2020
          </Text>
          <Text style={{ fontSize: '11px', marginLeft: '10px' }}>
            SHOW BY:- GUILTY MIND
          </Text>
          <Text style={{ fontSize: '11px', marginLeft: '10px' }}>
            BOOK BY:- MANISH SIR
          </Text>
        </View>
      </View>

      <View style={{ ...styles.flex }}>
        <View style={{ ...styles.flex, width: '60%' }}>
          <Text
            style={{
              ...styles.tableHeader,
              width: '9%',
              textAlign: 'center',
            }}
          >
            SR.NO
          </Text>
          <Text
            style={{ ...styles.tableHeader, width: '80%', textAlign: 'center' }}
          >
            DESCRIPTION
          </Text>
        </View>
        <View style={{ ...styles.flex, width: '40%' }}>
          <Text
            style={{
              ...styles.tableHeader,
              width: '30%',
            }}
          >
            DAY/HR/KMS
          </Text>
          <Text
            style={{
              ...styles.tableHeader,
              width: '35%',
              textAlign: 'center',
            }}
          >
            RATE
          </Text>
          <Text style={{ ...styles.tableHeader, width: '30%' }}>AMOUNT</Text>
        </View>
      </View>
      <View style={{ ...styles.flex }}>
        <View style={{ ...styles.flex, width: '60%' }}>
          <Text
            style={{
              ...styles.tableHeader,
              width: '9%',
              textAlign: 'center',
            }}
          >
            SR.NO
          </Text>
          <Text
            style={{ ...styles.tableHeader, width: '80%', textAlign: 'center' }}
          >
            DESCRIPTION
          </Text>
        </View>
        <View style={{ ...styles.flex, width: '40%' }}>
          <Text
            style={{
              ...styles.tableHeader,
              width: '30%',
            }}
          >
            DAY/HR/KMS
          </Text>
          <Text
            style={{
              ...styles.tableHeader,
              width: '35%',
              textAlign: 'center',
            }}
          >
            RATE
          </Text>
          <Text style={{ ...styles.tableHeader, width: '30%' }}>AMOUNT</Text>
        </View>
      </View>
      <View style={{ ...styles.flex }}>
        <View style={{ ...styles.flex, width: '60%' }}>
          <Text
            style={{
              ...styles.tableHeader,
              width: '9%',
              textAlign: 'center',
            }}
          >
            SR.NO
          </Text>
          <Text
            style={{ ...styles.tableHeader, width: '80%', textAlign: 'center' }}
          >
            DESCRIPTION
          </Text>
        </View>
        <View style={{ ...styles.flex, width: '40%' }}>
          <Text
            style={{
              ...styles.tableHeader,
              width: '30%',
            }}
          >
            DAY/HR/KMS
          </Text>
          <Text
            style={{
              ...styles.tableHeader,
              width: '35%',
              textAlign: 'center',
            }}
          >
            RATE
          </Text>
          <Text style={{ ...styles.tableHeader, width: '30%' }}>AMOUNT</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    border: '1px solid black',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
  },
  addressContainer: {
    textAlign: 'center',
    marginTop: 5,
    // borderTop: ' 1px solid black',
    // borderRight: '1px solid black',
    // borderLeft: '1px solid black',
  },
  addressContainer2: {
    // border: '1px solid black',
  },
  header: {
    fontSize: 25,
    marginBottom: -1,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  tableHeader: {
    padding: 2,
    fontSize: 11,
    fontWeight: 'bold',
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
    // border: '1px solid black',
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
