declare module 'react-gif-player' {
    import { Component } from 'react'; 

    interface GifPlayerProps {
        gif: string; 
        still: string;
        className?: string; 
        onPlay?: () => void; 
        onPause?: () => void; 
    }

    class GifPlayer extends Component<GifPlayerProps> {}

    export default GifPlayer; 
}