import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/videos/create', 'VideosController.create')
Route.get('/videos', 'VideosController.index')
Route.get('/videos/:id', 'VideosController.show')
Route.post('/videos', 'VideosController.store')
