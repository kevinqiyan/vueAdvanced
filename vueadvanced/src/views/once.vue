<template>
  <div id="Once">
      <div id="Btn" @click="toggleWeekends">
          点击
      </div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
// import calendar from '../components/calendar'
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    // calendar
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick, //添加点击事件
        weekends: false,
        locale:"zh-cn",
        editable:false,//是否允许修改事件
        events: [
          { title: 'event 1', date: '2021-03-18' },
          { title: 'event 2', date: '2021-03-19' },
        ],
        eventLimit:2,//事件个数
        eventClick:this.eventClick,
      },
    };
  },
  methods: {
      //提示点击了哪一天
    handleDateClick: function (arg) {
        console.log("date click! " + arg.dateStr);
      //alert("date click! " + arg.dateStr); 
    },
    // 点击切换工作日/
    toggleWeekends: function() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    },
    // 事件点击
    eventClick(event){
        console.log(event, '事件点击');
    }
  },
};
</script>
<style>
#Btn{
    width: 50px;
    height: 20px;
    text-align: center;
    line-height: 20px;
}
</style>