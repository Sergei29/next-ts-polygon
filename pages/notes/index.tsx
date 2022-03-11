/** @jsxImportSource theme-ui */
import Page from '../../src/containers/Page'
import NavLink from '../../src/components/NavLink'

const Notes = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }))
  return (
    <Page>
      <h1>My Notes</h1>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map(({ id, title }) => (
          <div key={id} sx={{ width: '33%', p: 2 }}>
            <NavLink href="/notes/[id]" as={`notes/${id}`}>
              <div sx={{ variant: 'containers.card' }}>{title}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </Page>
  )
}

export default Notes
