import { Dialog, DialogContent } from '@radix-ui/react-dialog'
import React from 'react'

const CommentDialog = ({open,setOpen}) => {
  return (
    <Dialog open={open}>
      <DialogContent onInteractOutside={()=>setOpen(false)}>
        <img src="https://images.unsplash.com/photo-1739130524827-5fa364835c41?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post_image" />
      </DialogContent>
    </Dialog>
  )
}

export default CommentDialog
