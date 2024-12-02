function createFrame(names) {
    let frame = ''
    let maxWide = 0
    for (let i = 0; i < names.length; i++){
      if (names[i].length > maxWide){
        maxWide = names[i].length
      }
    }
  
    const hFrames = '*'.repeat(maxWide + 4)
    frame = hFrames + '\n'
  
    for (let i = 0; i < names.length; i++){
      const line = '* ' + names[i] + ' '.repeat(maxWide - names[i].length) + ' *'
      frame = frame + line + '\n'
    }
  
    frame = frame + hFrames
  
    return frame
  }