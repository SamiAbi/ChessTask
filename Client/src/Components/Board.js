import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import Box from "./Box";


const Board = props => {
    const [playerPostion, setPlayerPostion] = useState({ x: -10 + 100, y: 0 });
    const [posibleMoves, setPosibleMoves] = useState([]);
    const [isDrag, setIsDrag] = useState(false);



    const onControlledDragStop = (e, position) => {
        let { x, y } = position;
        const i = Math.round(y / 100);
        const j = Math.round(x / 100);
        if (i < 8 && j < 8 && !!checkPostion(i, j)) {
            x = -10 + 100 * j;
            y = 100 * i;
            setPlayerPostion({ x, y });
            setIsDrag(false);
        }
        setIsDrag(false);
    };
    const setNewPostion = (postion) => {
        setPosibleMoves(postion);
    }
    useEffect(() => {
        const i = Math.round(playerPostion.y / 100);
        const j = Math.round(playerPostion.x / 100);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postion: { i: i, j: j } })
        };
        fetch('http://127.0.0.1:3000/getMove', requestOptions)
            .then(response => response.json())
            .then(data => setNewPostion(data));
    }, [playerPostion]);

    const checkPostion = (i, j) => {
        return !!isDrag && !!posibleMoves.find((postion) => postion.i == i && postion.j == j);
    }

    const boxes = () => {
        let boxes = [];
        for (let i = 0; i < 8; i++) {
            let line = []
            for (let j = 0; j < 8; j++) {
                line.push(<Box key={'col' + j} i={i} j={j} color={(j + i) % 2 == 1 ? 'B' : 'W'} selectedColor={!!checkPostion(i, j)} />);
            }
            boxes.push(<div className='row' key={"row" + i}>{line}</div>);
        }
        return boxes;
    }

    return (
        <>
            <div className="container border border-warning m-2" style={{ width: '802px', height: '802px' }}>
                <Draggable position={playerPostion} onStop={onControlledDragStop} onStart={() => setIsDrag(true)}>
                    <div className="m-1" style={{ position: 'absolute', width: 90 }}>
                        <img src={'https://image.flaticon.com/icons/png/512/32/32854.png'} style={{ width: 90 }} />
                    </div>
                </Draggable>
                {
                    boxes()
                }
            </div>

        </>
    );

}

export default Board;