import React from 'react';

import AppBoxes from './AppBoxes';
import './style.css';

import chatroom from '../images/chatroom.png'
import todo_list from '../images/todo_list.png'
import games from '../images/games.png'
import weather from '../images/weather.png'
import search from '../images/search.png'
import typingtest from '../images/typingtest.png'
import youtube from '../images/youtube.png'
import recipe from '../images/recipe.png'

class Apps extends React.Component{
    render(){
        return(
            <div className='Apps'>          
                <div className='Justapps'>
                    <h3>Apps</h3>
                    <div className='Justappsflex'>
                        <AppBoxes className='appboxes' title='Online Chatroom' image={chatroom} source='https://nidvar.github.io/chatroom/' />
                        <AppBoxes className='appboxes' title='Notes' image={todo_list} source='https://nidvar.github.io/landing/' />
                        <AppBoxes className='appboxes' title='Games' image={games} source='https://nidvar.github.io/games/' />
                        <AppBoxes className='appboxes' title='Weather App' image={weather} source='https://nidvar.github.io/weather/' />
                        <AppBoxes className='appboxes' title='Find Images' image={search} source='https://nidvar.github.io/searchimage/' />
                        <AppBoxes className='appboxes' title='Typing Test' image={typingtest} source='https://nidvar.github.io/typingtest/' />
                        <AppBoxes className='appboxes' title='Youtube Clone' image={youtube} source='https://nidvar.github.io/myvideo/' />
                        <AppBoxes className='appboxes' title='Recipe Finder' image={recipe} source='https://nidvar.github.io/recipe/' />
                    </div>
                </div>   
            </div>
        )
    }
}

export default Apps