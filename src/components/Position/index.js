import React from 'react'

export default class index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userinfo:[
                {
                    name:'wen',
                    age:20,
                    sex:'男',
                    jobs:['11','22','33']
                },
                {
                    name:'yue',
                    age:20,
                    sex:'男',
                    jobs:['11','22','33']
                },
                {
                    name:'jiao',
                    age:20,
                    sex:'男',
                    jobs:['11','22','33']
                }
            ]
        }
    }
    render(){
        return(
            <div>
                    <div>
                        {
                        this.state.userinfo.map((element,index)=>{
                            return(
                                <div key={index} width='20px' height='10px' backgroundcolor='black'>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span>{element.sex}</span>
                                   
                                </div>

                            )
                        })
                    }
                   </div>
            </div>
        )
    }
}