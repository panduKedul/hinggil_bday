interface Props {
  playing: boolean
  onToggle: () => void
}

export default function Music({ playing, onToggle }: Props) {
  return (
    <button
      className={playing ? 'music on' : 'music'}
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={playing ? 'Jeda musik' : 'Putar musik'}
    >
      <i aria-hidden="true">{playing ? '❚❚' : '♪'}</i>
      {playing ? 'Jeda' : 'Putar musik'}
    </button>
  )
}
