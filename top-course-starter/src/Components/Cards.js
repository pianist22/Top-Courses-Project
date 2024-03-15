import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards= (props)=>{
    const courses = props.courses;
    const [likedCourses,setLikedCourses] = useState([]);
    const category = props.category;

    function getCourses(){
        if(category === "All"){
            let allCourses= [];
            Object.values(courses).forEach((array)=>{
                array.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            // main sirf specific category ka data pass karunga 
            return courses[category];
        }

    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course)=>(
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                ))
            }
        </div>
    );
}

export default Cards;