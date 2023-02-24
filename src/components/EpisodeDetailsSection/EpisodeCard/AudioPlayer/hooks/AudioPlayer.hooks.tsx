import { useState, useRef } from 'react';

const AudioPlayerHooks: any = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef: any = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleDurationChange = () => {
        setDuration(audioRef.current.duration);
    };

    const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const progressWidth = progressRef.current?.clientWidth ?? 0;
        const clickedPosition = event.nativeEvent.offsetX;
        const percent = clickedPosition / progressWidth;
        const newTime = percent * duration;
        audioRef.current.currentTime = newTime;
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };


    return {
        handleMuteToggle,
        formatTime,
        handleProgressClick,
        handleDurationChange,
        handleTimeUpdate,
        togglePlay,
        audioRef,
        isMuted,
        isPlaying,
        progressRef,
        currentTime,
        duration
    }
}
export default AudioPlayerHooks;