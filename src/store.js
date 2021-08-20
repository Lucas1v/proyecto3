import { createStore } from "redux";

const drums = [["Chord1", 81, "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", "Q"],["Chord2", 87, "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3", "W"],["Chord3",69, "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3","E"],["Shaker",65, "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3","A"],["OpenHH",83, "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3","S"],["ClosedHH",68, "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3","D"],["PunchySick",90, "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3","Z"],["SideStick",88, "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3","X"],["Snare",67, "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3","C"]];
const druums = [["Heater-1",81, "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","Q"],["Heater-2",87, "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","W"],['Heater-3',69, "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","E"],['Heater-4',65, "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","A"],['Clap',83, "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","S"],['Open-HH',68, "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","D"],["Kick-n'-Hat",90, "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","Z"],['Kick',88, "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","X"],['Closed-HH',67, "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","C"]];
const initialState = {
    power: true,
    bank: true,
    drum: "",
    position: "start",
    potition: "start"
};

const reducerDrum = (state = initialState, action) => {
    switch(action.type){
        case "power":
            if(state.power){
                return{
                    ...state,
                    power: false,
                    potition: "end",
                    drum:""
                }
            }else{
                return {
                     ...state,
                     power: true,
                     potition: "start"
                }
            }
        case "change":
            if(state.power){
                if(state.bank){
                    return{
                    ...state,
                    bank: false,
                    position: "end",
                    drum: "Heater Kit"
                    }
                }else{
                    return {
                        ...state,
                        bank: true,
                        position: "start",
                        drum: "Smooth Piano Kit"
                    }
                }
            }else{return{...state}}
                
        case "drum1":

            if(state.power){    
                if(state.bank){
                    return{
                        ...state,
                        drum: drums[action.id][0]
                    }
                }else{
                    return{
                        ...state,
                        drum: druums[action.id][0]
                    }
                }
            }else{return {...state,}}
            
        
        default:
            return state;
    };
}

export default createStore(reducerDrum);
export {drums, druums};