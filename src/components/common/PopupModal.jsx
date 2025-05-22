import React from 'react'
import ReactDOM from 'react-dom'

const PopupModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default PopupModal