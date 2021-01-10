import React from 'react';

import { rDate } from '../utils/rDate'
import { pad } from '../utils/padString'

import { Link } from 'react-router-dom'

let image = "https://storage.googleapis.com/recipes-9ru4lzic/69d539e7de35d229e6707787a03dc5098418da02.jpg"


export const Card = (props) => {

    if (props.id) {
        image = "https://storage.googleapis.com/recipes-9ru4lzic/"  +  props.id + ".jpg"
    }

    return (
        <div className="card">
            <div className="card-title">
            {props.title ? props.title : "Excepteur sint occaecat cupidatat non proident"}
            </div>
            <div> 
            <img className="card-image" src={image} alt="food" />
            </div>
            <div className="card-body">
            {props.description ? pad(props.description, 140) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."}
            </div>
            <div className="card-footer">
            {rDate()}  &nbsp; •  &nbsp;  Read More        
            </div>
        </div>
    )
};

export const CardLg = (props) => {

    if (props.id) {
        image = "https://storage.googleapis.com/recipes-9ru4lzic/"  +  props.td + ".jpg"
    }

    return (
        <div className="card card-lg">
            <div>
            <img className="card-image" src={image} alt="food" />
            </div>
            <div className="card-title">
            {props.title ? props.title : "Excepteur sint occaecat cupidatat non proident"}
            </div>
            <div className="card-body">
            {props.description ? pad(props.description, 150) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."}
            </div>
            <div className="card-footer">
            {rDate()}  &nbsp; •  &nbsp;  Read More       
            </div>
        </div>
    )
};


export const CardMd = (props) => {

    if (props.id) {
        image = "https://storage.googleapis.com/recipes-9ru4lzic/"  +  props.id + ".jpg"
    }

    return (
        <div className="card card-md">
            <div className="card-title">
            {props.title ? props.title : "Excepteur sint occaecat cupidatat non proident"}
            </div>
            <div>
            <img className="card-image" src={image} alt="food" />
            </div>
            <div className="card-body">
            {props.description ? pad(props.description, 170) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."}
            </div>
            <div className="card-footer">
            {rDate()}  &nbsp; •  &nbsp; <Link to={`/post/${props.id}`}>Read More</Link>       
            </div>
        </div>
    )
};

export const CardSm = (props) => {

    if (props.id) {
        image = "https://storage.googleapis.com/recipes-9ru4lzic/"  +  props.id + ".jpg"
    }

    return (
        <div className="card card-sm">
            <div className="card-title">
            {props.title ? props.title : "Excepteur sint occaecat cupidatat non proident"}
            </div>
            <div>
            <img className="card-image" src={image} alt="food" />
            </div>
            <div className="card-body">
            {props.description ? pad(props.description, 160) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."}
            </div>
            <div className="card-footer">
            {rDate()}  &nbsp; •  &nbsp;  Read More        
            </div>
        </div>
    )
};

export default { CardLg, CardMd, CardSm, Card }