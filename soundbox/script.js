var octave = 3;
var mappings = {
    65:{
        key: "C",
        relativeOctave: 0
    },
    83:{
        key: "D",
        relativeOctave: 0
    },
    68:{
        key: "E",
        relativeOctave: 0
    },
    70:{
        key: "F",
        relativeOctave: 0
    },
    71:{
        key: "G",
        relativeOctave: 0
    },
    72:{
        key: "A",
        relativeOctave: 1
    },
    74:{
        key: "B",
        relativeOctave: 1
    },
    75:{
        key: "C",
        relativeOctave: 1
    }
};

var audioSources = [
    {
        key: "C",
        octave: 3,
        audio: new Audio("media/Bell_3C.wav")
    },
    {
        key: "D",
        octave: 3,
        audio: new Audio("media/Bell_3D.wav")
    },
    {
        key: "E",
        octave: 3,
        audio: new Audio("media/Bell_3E.wav")
    },
    {
        key: "F",
        octave: 3,
        audio: new Audio("media/Bell_3F.wav")
    },
    {
        key: "G",
        octave: 3,
        audio: new Audio("media/Bell_3G.wav")
    },
    {
        key: "A",
        octave: 4,
        audio: new Audio("media/Bell_4A.wav")
    },
    {
        key: "B",
        octave: 4,
        audio: new Audio("media/Bell_4B.wav")
    },
    {
        key: "C",
        octave: 4,
        audio: new Audio("media/Bell_4C.wav")
    }
];

audioSources.forEach( audioItem =>{
    
    audioItem.audio.preload = 'auto';
    // audioItem.audio.load();
});

function getAudioForNote(note){
    return audioSources.find(audioItem => 
        audioItem.key == note.key
        && audioItem.octave == note.octave
    ).audio;
};

function getNoteFromNoteLabel(noteLabel){
    return {
        octave: noteLabel[0],
        key: noteLabel[1]
    };
};

function playNote(noteLabel){
    console.log("Playing note", noteLabel);
    note = getNoteFromNoteLabel(noteLabel);
    noteAudio = getAudioForNote(note).cloneNode(true);
    noteAudio.play();
};

document.addEventListener("keyup", function(event){
    mapping = mappings[event.keyCode];
    if (mapping){
        note = (mapping.relativeOctave + octave).toString() +  mapping.key
        playNote(note);
    };
});