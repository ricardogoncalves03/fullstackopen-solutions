# React

```javascript
setNotes(notes.concat(noteObject))
```

The method does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end. This is important since we must [never mutate state](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly) directly in React!

## Forms

[Controlled components](https://reactjs.org/docs/forms.html#controlled-components)