# Trello Board by Megha

A Trello-style board for managing todos using the DummyJSON Todos API.

## 🛠️ How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd trello-board
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.
   Port can be different as well 1234

## Approach Taken

### 1. **Component Design:**
   - **TrelloBoard**: Main component rendering lanes and handling todo interactions.
   - **TrelloLane**: Renders individual lanes (Pending, In Progress, Completed).
   - **TodoItem**: Displays individual todos with edit and delete functionality.

### 2. **State Management:**
   - `todos`: Manages the list of todos.
   - `loading`: Controls loading state during API calls.
   - `skip` and `limit`: For pagination, allowing incremental loading of todos.

### 3. **API Integration:**
   - `fetchTodos`: Fetches todos with pagination.
   - `addTodo`: Adds a new todo item.
   - `editTodo`: Edits an existing todo item.
   - `updateTodoStatus`: Updates todo status.
   - `deleteTodo`: Deletes a todo item.

## Design Decisions & Patterns

1. **Code Splitting**: Split logic into modular components (TrelloBoard, TrelloLane, TodoItem).
2. **Side Effects**: Introduced API calls into a separate `apihandler.js` for better separation.
3. **Pagination**: We have Implemented lazy loading using "Load More" button to reduce the initial payload.
4. **Icons**: Used `react-icons` library for edit and delete actions for better UI/UX.

---

## Optimizations Applied

- **Lazy Loading**: Only fetches 10 todos at a time for better performance.
- **Efficient State Updates**: Updated todos using `setTodos` and `prevTodos` to avoid full re-renders.
- **Asynchronous Handling**: Used `async/await` for better readability and error handling.
- **Loader**: Added a spinner for better user experience during API calls.
- **Memoized Component**: TrelloLane component only re-renders when status or todos change.

---

## Responsive 

- **Media Query**: Used media query to handle design elements in mobile
- **Next/Prev**: Used next/prev button to view cards


---

## Known Limitations & Future Improvements

1. **Error Handling Improve**: We can Improve user experience on API errors (e.g., toast notifications).
2. **Implement Infinite Scrolling**: We can replace "Load More" with infinite scroll for a smoother experience.
3. **Mobile Drag & Drop**: Add an option in mobile to move card from one lane to another
4. **Components**: We can use custom button component to replace all buttons and we can have seperate form compoent for add card
5. **Props Drilling**: We can avoid prop drilling & use a centralized state to access the props e.g useContext hook

---

## Dependencies

- **React**: Frontend framework
- **react-icons**: For displaying edit and delete icons

---


