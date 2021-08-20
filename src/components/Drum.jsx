import React from "react";
import { connect } from "react-redux";
import { drums, druums } from "../store";


const Drum = ({drum, changeDrum, bankPosition, bank, position, onOff, potition, power}) => {
    let audio;
    if(bank){
        audio = drums;
    }else{
        audio = druums;
    }
    document.addEventListener("keyup", (e) => {
            for( let i in audio){
                if(audio[i][1] === e.keyCode){
                    changeDrum(i, "drum1")
                    playAudio(audio[i][3])
                }
                
            }
        })
    function playAudio(audioId) {
        if(power){
            const sound = document.getElementById(audioId);
            sound.currentTime = 0;
            sound.play();
        }
    };
    
    return (
        <div id="drum-machine">
            <div id="letras">
                <div className="drum-pad" id="Chord1" onClick={() => {playAudio("Q"); changeDrum(0, "drum1")}}><audio src={audio[0][2]} className="clip" id="Q"></audio>Q</div>
                <div className="drum-pad" id="Chord2" onClick={() => {changeDrum(1, "drum1"); playAudio("W")}}><audio src={audio[1][2]} className="clip" id="W"></audio>W</div>
                <div className="drum-pad" id="Chord3" onClick={() => {changeDrum(2, "drum1"); playAudio("E")}}><audio src={audio[2][2]} className="clip" id="E"></audio>E</div>
                <div className="drum-pad" id="Shaker" onClick={() => {changeDrum(3, "drum1"); playAudio("A")}}><audio src={audio[3][2]} className="clip" id="A"></audio>A</div>
                <div className="drum-pad" id="OpenHH" onClick={() => {changeDrum(4, "drum1"); playAudio("S")}}><audio src={audio[4][2]} className="clip" id="S"></audio>S</div>
                <div className="drum-pad" id="ClosedHH" onClick={() => {changeDrum(5, "drum1"); playAudio("D")}}><audio src={audio[5][2]} className="clip" id="D"></audio>D</div>
                <div className="drum-pad" id="PunchySick" onClick={() => {changeDrum(6, "drum1"); playAudio("Z")}}><audio src={audio[6][2]} className="clip" id="Z"></audio>Z</div>
                <div className="drum-pad" id="SideStick" onClick={() => {changeDrum(7, "drum1"); playAudio("X")}}><audio src={audio[7][2]} className="clip" id="X"></audio>X</div>
                <div className="drum-pad" id="Snare" onClick={() => {changeDrum(8, "drum1"); playAudio("C")}}><audio src={audio[8][2]} className="clip" id="C"></audio>C</div>
            </div>    
            <div className="derecha" id="power" onClick={() => onOff("power")}><div style={{justifySelf: potition}} className="azulito"></div></div>
            <span className="derecha" id="display">{drum}</span>
            <div className="derecha" id="bank" onClick={() => bankPosition("change")}><div style={{justifySelf: position}} className="azulito"></div></div>
        </div>
)}
const mapStateToPops = state => ({
    drum: state.drum,
    bank: state.bank,
    position: state.position,
    potition: state.potition,
    power: state.power
})

const mapDispatchToProps = dispatch => ({
    changeDrum(id, name) {
        dispatch({
            type: name,
            id: id
        });
    },
    bankPosition(name) {
        dispatch({
            type: name
        });
    },
    onOff(name){
        dispatch({
            type: name
        });
    }
})

export default connect(mapStateToPops, mapDispatchToProps)(Drum);
