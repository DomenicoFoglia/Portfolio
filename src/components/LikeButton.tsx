import './LikeButton.css'

type Props = {
    liked: boolean
    count: number
    onToggle: () => void
}

function LikeButton({ liked, count, onToggle }: Props) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        onToggle()
    }

    return (
        <button
            type="button"
            className={`like-button ${liked ? 'liked' : ''}`}
            onClick={handleClick}
            aria-label={liked ? 'Rimuovi mi piace' : 'Metti mi piace'}
        >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                    d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
                    fill={liked ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="like-count">{count}</span>
        </button>
    )
}

export default LikeButton