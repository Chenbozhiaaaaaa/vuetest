<template>
<div class="myPage">
  <el-button @click="exportToExcel">下载表格</el-button>
  <el-button @click="printContent">打印表格</el-button>
  <div class="myTable">
    <el-table
      id="myTable"
      :height="tableHeight"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
   
</div>
</template>
 
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data (){
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },  {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },  {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ],
      tableTitleData: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' }
      ],
      tableHeight:'auto',
 
    };
  },
  methods:{
    //导出Excel
    exportToExcel () {
      let et = XLSX.utils.table_to_book(document.querySelector('#myTable')); //此处传入table的DOM节点
      console.log(11,et);
      let etout = XLSX.write(et, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      });
      try {
          FileSaver.saveAs(new Blob([etout], {
              type: 'application/octet-stream'
          }), 'trade-publish.xlsx');   //trade-publish.xlsx 为导出的文件名
      } catch (e) {
          console.log(e, etout) ;
      }
      return etout;
    },
    //打印页面内容
    printContent(){
      console.log(11);
      let wpt = document.querySelector('#myTable');
      let newContent = wpt.innerHTML;
      let oldContent = document.body.innerHTML;
       
      document.body.innerHTML = newContent;
      window.print(); //打印方法
      // window.localtion.reload();
      history.go(0)
      document.body.innerHTML = oldContent;
    },
 
  },
  mounted(){},
}
 
</script>
<style  scoped>
.myPage{
  overflow-y: scroll; 
}
.myTable{
  width: 800px;
   
}
</style>