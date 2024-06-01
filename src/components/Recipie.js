import { useState } from "react";

const Section = ({ title, ingredients, description, show, setShow }) => {
  // const [show, setShow] = useState(false);
  return (
    <div className="p-3 m-2 border border-gray-900">
      <h1>{title}</h1>
      {show ? (
        <div>
          <button
            className="cursor-pointer underline"
            onClick={() => setShow(show)}
          >
            Hide
          </button>
          <div>
            <h2>Ingredients :</h2>
            <div>{ingredients}</div>
            <h2>Instructions : </h2>
            <div>{description}</div>
          </div>
        </div>
      ) : (
        <button
          className=" cursor-pointer underline"
          onClick={() => setShow(show)}
        >
          Show
        </button>
      )}
    </div>
  );
};
const RecipieList = () => {
  const [sectionconfig, setSectionConfig] = useState("chicken");
  return (
    <div>
      <Section
        title={"1. Butter Chicken:"}
        ingredients={
          <div>
            <li>1.5 lbs (700g) boneless, skinless chicken, cut into cubes</li>
            <li>
              1 tablespoon ginger-garlic paste, turmeric powder, chili powder,
              garam masala
            </li>
            <li>Salt to taste</li>
            <li>2 tablespoons oil</li>
            <li>1/2 cup cream</li>
            <li>2 tablespoons butter</li>
            <li>1 cup tomato puree</li>

            <li>1 large onion, finely chopped</li>
            <li>Fresh coriander leaves for garnish</li>
          </div>
        }
        description={
          <p>
            Marinate chicken in yogurt, ginger-garlic paste, turmeric, chili
            powder, garam masala, and salt. Refrigerate for at least 2 hours.
            Heat oil in a pan, add onions and sauté until golden brown. Add
            marinated chicken and cook until browned. Stir in tomato puree,
            cream, and butter. Simmer for 15-20 minutes. Garnish with fresh
            coriander leaves and serve with naan or rice.
          </p>
        }
        show={sectionconfig === "chicken"}
        setShow={() =>
          setSectionConfig((show) => (show === "chicken") ? "" : "chicken")
        }
      />
      <Section
        title={"2. Palak Paneer:"}
        ingredients={
          <div>
            <li>2 cups spinach, blanched and pureed</li>
            <li>200g paneer, cubed</li>
            <li>1 onion, finely chopped</li>
            <li>1 tomato, chopped</li>
            <li>
              1 tablespoon ginger-garlic paste, cumin powder, coriander powder{" "}
            </li>
            <li>1/2 teaspoon turmeric powder, garam masala </li>
            <li>Salt to taste</li>

            <li>2 tablespoons oil</li>
            <li>2 tablespoons cream (optional)</li>
          </div>
        }
        description={
          <p>
            Heat oil in a pan, sauté onions until golden brown. Add
            ginger-garlic paste, cumin powder, coriander powder, turmeric, and
            garam masala. Cook for 2 minutes. Add chopped tomatoes and cook
            until oil separates. Stir in spinach puree and cook for 5 minutes.
            Add cubed paneer and salt. Simmer for 10 minutes. Add cream if
            desired and serve with naan or rice.
          </p>
        }
        show={sectionconfig === "paneer"}
        setShow={() => {
          setSectionConfig( (show) => (show === "paneer") ? "" : "paneer")
        }}
      />
      <Section
        title={"Gulab Jamun:"}
        ingredients={
          <div>
            <li>1 cup milk powder</li>
            <li>1/4 cup all-purpose flour</li>
            <li>1/4 cup ghee (clarified butter)</li>
            <li>A pinch of baking soda</li>
            <li>2-3 tablespoons milk (as needed to form a dough)</li>
            <li>Oil or ghee for frying</li>
            <li>
              For Sugar Syrup: 1 cup sugar, 1 cup water, 1/2 teaspoon cardamom
              powder, A few saffron strands (optional){" "}
            </li>
          </div>
        }
        description={
          <p>
            In a bowl, mix milk powder, all-purpose flour, ghee, and baking
            soda. Gradually add milk to form a soft dough. Divide into small
            balls. Heat oil or ghee in a pan. Fry the dough balls until golden
            brown. In a separate pan, make a sugar syrup by boiling sugar,
            water, cardamom powder, and saffron. Dip the fried balls into the
            sugar syrup for a few hours. Serve Gulab Jamun warm or at room
            temperature.
          </p>
        }
        show={sectionconfig === "gulab"}
        setShow={()=> {
          setSectionConfig((show)=> (show === "gulab") ? "" : "gulab") 
          }}
      />
    </div>
  );
};
export default RecipieList;
