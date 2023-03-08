const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hat'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: 'Womens'
    },
    {
      id: 5,
      title: 'Mens'
    },
  ]

  return (
   <div className="categories-container">
    {
      categories.map(({id, title}) => {
      return(<div className="category-container" key={id}>
            <img className="image-background"/>
            <p>title</p>
            <p>Shop Now!</p>
          </div>)
      })
    }
    
   </div>
  );
}

export default App;
