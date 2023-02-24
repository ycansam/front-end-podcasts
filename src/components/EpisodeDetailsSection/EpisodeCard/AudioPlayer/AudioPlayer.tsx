import styles from './AudioPlayer.module.css'
import AudioPlayerHooks from './hooks/AudioPlayer.hooks';
type TAudioPlayer = {
    audiourl: string;
}

type TAudioPlayerHooks = {
    handleMuteToggle: () => void;
    formatTime: (time: number) => string;
    handleProgressClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleDurationChange: () => void;
    handleTimeUpdate: () => void;
    togglePlay: () => void;
    audioRef: React.RefObject<HTMLAudioElement>;
    isMuted: boolean;
    isPlaying: boolean;
    progressRef: React.RefObject<HTMLDivElement>;
    currentTime: number;
    duration: number;
}

const AudioPlayer: React.FC<TAudioPlayer> = ({ audiourl }) => {

    const {
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
    }: TAudioPlayerHooks = AudioPlayerHooks();

    return <div >
        <audio
            src={audiourl}
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onDurationChange={handleDurationChange}
            muted={isMuted}
        />
        <div className={styles.containerPlayer} >
            <button onClick={togglePlay}><i className={isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'}></i></button>
            <div >
                <div className={styles.mainBar}
                    ref={progressRef}
                    style={{
                        position: 'relative',
                        height: '7px',
                        backgroundColor: '#333',
                        cursor: 'pointer',
                        borderRadius: '2px'
                    }}
                    onClick={handleProgressClick}
                >
                    <div
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: `${(currentTime / duration) * 100}%`,
                            backgroundColor: '#ccc',
                            borderRadius: '2px'
                        }}
                    />
                </div>
            </div>
            <span>{formatTime(currentTime)}</span>
            <button onClick={handleMuteToggle}><i className={isMuted ? 'bi bi-volume-mute-fill' : 'bi bi-volume-down-fill'}></i></button>
        </div>
    </div>
}
export default AudioPlayer;