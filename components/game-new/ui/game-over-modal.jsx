import { UiModal } from '../../uikit/ui-modal'
import { UiButton } from '../../uikit/ui-button'

export function GameOverModal() {
  return (
    <UiModal
      widht="md"
      // isOpen={winnerSymbol}
      onClose={() => {
        console.log('close')
      }}
    >
      <UiModal.Header>Игра завершена</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">Paromovevg</span>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton variant="outline" size="md">
          Вернуться
        </UiButton>
        <UiButton variant="primary" size="md">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  )
}
