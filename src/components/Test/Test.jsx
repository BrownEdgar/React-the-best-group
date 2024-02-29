import React, { useEffect, useState } from 'react'

export default function Test() {
  const x = 5;
  if (x > 1) {
    const [count, setCount] = useState(0)
  }

  useEffect(() => {
    console.log('ok')

  }, [])

  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur neque eveniet officia, amet itaque voluptatem perspiciatis exercitationem iste nostrum praesentium eius deserunt, quaerat vero molestias ea labore ipsam illo impedit placeat? Expedita nobis quas fugit facere dolorem error eligendi aperiam, explicabo dolores praesentium placeat est earum unde blanditiis molestiae exercitationem laborum nihil velit ad. Eius saepe quasi et dignissimos illo illum eveniet, iste est modi temporibus qui, atque dolorum.s</p>
    </div>
  )
}
