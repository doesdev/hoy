'use strict'

import test from 'ava'
import hoy from './index'

test('it works', (assert) => {
  assert.truthy(hoy().fresh)
  assert.falsy(hoy().fresh)
  let oldDateNow = Date.now
  Date.now = () => {
    let d = new Date()
    d.setDate(d.getDate() + 1)
    return d.valueOf()
  }
  assert.truthy(hoy().fresh)
  Date.now = oldDateNow
})
