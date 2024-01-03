import React, {useState} from "react";
import './styles.css'
type ScheduleType = {
    day: number,
    month: string,
    year: number,
    title: string,
}
type MountainsArrayType = {
    title: string,
    backgroundImg: string,
    schedule: ScheduleType[],
}
export const MountainsSchedule = ({mountainsList}: {mountainsList: MountainsArrayType[]})=>{
    const [activeIndex, setActiveIndex] = useState(0);
    return(
       <div>
           <div className='schedule-navigation'>
               {
                   mountainsList.map((mountain, index) =>{
                       return(
                           <button onClick={()=> setActiveIndex(index)}  key={index}>
                               <div className={activeIndex === index ? 'schedule-button active-button' : 'schedule-button'}>
                                   {mountain.title}
                               </div>
                           </button>
                       );
                   })
               }
           </div>
           <section className='mountain-schedule' style={{backgroundImage: 'url(' + mountainsList[activeIndex].backgroundImg + ')', backgroundSize: "cover"}}>
               <div className='schedule-container'>
                   <h2>SCHEDULE</h2>
                   {
                       mountainsList[activeIndex].schedule.map((date, index)=>{
                           let activePadding = true;
                           let currMonth = mountainsList[activeIndex].schedule[index].month;
                           let nextMonth = (mountainsList[activeIndex].schedule.length-1 !== index) && mountainsList[activeIndex].schedule[index+1].month ? mountainsList[activeIndex].schedule[index+1].month : "Nothing"
                           if(currMonth === nextMonth){
                               activePadding = !activePadding
                           }
                           return(
                               <div className={activePadding ? 'date-container next-month' : 'date-container'}  key={index}>
                                   <span>{date.day} {date.month} {date.year}</span>
                                   <span>{date.title}</span>
                               </div>
                           )
                       })
                   }
               </div>
           </section>
       </div>
    )
}