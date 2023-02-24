import { useState, useRef, useCallback } from 'react';

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

    const handleProgressClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const progressWidth = progressRef.current?.clientWidth ?? 0;
            const clickedPosition = event.nativeEvent.offsetX;
            const percent = clickedPosition / progressWidth;
            const newTime = percent * duration;
            audioRef.current.currentTime = newTime;
        },
        [duration]
    );

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };


    return {
        handleMuteToggle,
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
