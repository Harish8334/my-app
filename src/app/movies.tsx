"use client";
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../../slice";

export default function Movies (){
    const movies = useSelector((state: { item: { items: any[]; }; }) => state.item.items);
    const dispatch = useDispatch();
    const deleteMovie = (id: number) => {
        dispatch(removeItem({ id }));
        console.log(id);
    }
    return (<div>
        
        <h1>hello</h1>
       { movies.map((movie) => (
        <div key={movie.id} className="" style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
        <p>{movie.name}</p>
        <p>{movie.id}</p>
<button onClick={()=>deleteMovie(movie.id)}>delete</button>
        </div>
       ))}
    </div>)
}