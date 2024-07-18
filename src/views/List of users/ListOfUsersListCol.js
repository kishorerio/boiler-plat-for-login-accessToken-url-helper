import React from 'react'
import { Badge } from 'reactstrap'

const Status = (cell) => {
  switch (cell.value) {
    case 'Active':
      return <Badge className="badge-soft-success px-3 py-2 rounded-pill">Active</Badge>
    // case 'Process Order':
    //   return <Badge className="badge-soft-warning px-3 py-2 rounded-pill">Process Order</Badge>
    case 'Inactive':
      return <Badge className="badge-soft-danger px-3 py-2 rounded-pill">In-Active</Badge>
  }
}

export { Status }
