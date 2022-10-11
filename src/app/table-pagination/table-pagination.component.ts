import { Component } from '@angular/core';

interface Mr {
  id?: number;
  tahun: string;
  rtu: string;
  draft: String;
  menunggu :String;
  disetujui: String;
  ditolak: String;

}

const MR: Mr[] = [
  {
    tahun: "2020",
    rtu: 'Financing TUR',
    draft: '21',
    menunggu: '2',
    disetujui: '3',
    ditolak: '4'
  },
  {
    tahun: "2021",
    rtu: 'Marketing TUR',
    draft: '12',
    menunggu: '5',
    disetujui: '2',
    ditolak: '2'
  },
  {
    tahun: "2022",
    rtu: 'Financing TUR',
    draft: '34',
    menunggu: '2',
    disetujui: '7',
    ditolak: '3'
  },
  {
    tahun: "2022",
    rtu: 'Marketing TUR',
    draft: '34',
    menunggu: '2',
    disetujui: '7',
    ditolak: '3'
  }
];

@Component({
  selector: 'my-table',
  templateUrl: './table-pagination.component.html'
})

export class NgbdTablePagination {

  constructor() {
    this.mr = [];
    this.refreshMr();
  }

  page = 1;
  pageSize = 4;
  collectionSize = MR.length;
  mr: Mr[];


  refreshMr() {
    this.mr = MR
      .map((mr, i) => ({id: i + 1, ...mr}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  peepsSelect:any
  data = [
    {
      name: "1"
    },
    {
      name: "2"
    },
    {
      name: "3"
    },
    {
      name: "4"
    }
  ];
}