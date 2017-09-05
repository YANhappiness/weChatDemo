Page({
  data: {
    lists: [],
    inputVal: "",
  },
  //es6语法可省略function
  inputChange(ev) {
    this.setData({
      inputVal: ev.detail.value,
    })

  },
  addMsg() {

    var newlist = this.data.lists;
    //判断输入框不等于空
    if (!!this.data.inputVal) {
      //添加新数组
      newlist.push({
        list: this.data.inputVal
      });
      //更新数据 this.setData()
      this.setData({
        lists: newlist,
        inputVal: '',
      })
    };

    console.log("输入数据：%s", this.data.inputVal);
    console.log(newlist);
  },
  //删除数据
  dellist(ev){
    //获取当前index
    var index = ev.target.dataset.index;
    var newlist = this.data.lists;
    newlist.splice(index,1);
    this.setData({
      lists:newlist,
    })
  },
  //删除全部留言
  delAllMsg(){
    this.setData({
      lists:[]
    })
  }
})