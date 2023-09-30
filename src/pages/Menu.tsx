import Style from './Menu.module.css';

export default function Menu() {
  return (
    <div className={Style.wrapper}>
      <h3 style={{ margin: 0 }}>Lunch Menu</h3>
      <div className={Style.dayDiv}>
        <h4 style={{ margin: '1vh 0' }}>
          Monday - Margherita Madness
        </h4>
        <ul style={{ margin: 0 }}>
          <li style={{ fontSize: '0.8rem' }}>
            Margherita Pizza: Tomato Sauce, Fresh Mozzarella, Basil, Olive Oil
          </li>
        </ul>
      </div>
      <div className={Style.dayDiv}>
        <h4 style={{ margin: '1vh 0' }}>
          Tuesday - Pepperoni Pleasure
        </h4>
        <ul style={{ margin: 0 }}>
          <li style={{ fontSize: '0.8rem' }}>
            Pepperoni Pizza: Tomato Sauce, Mozzarella, Pepperoni Slices
          </li>
        </ul>
      </div>
      <div className={Style.dayDiv}>
        <h4 style={{ margin: '1vh 0' }}>
          Wednesday - Calzone Delight
        </h4>
        <ul style={{ margin: 0 }}>
          <li style={{ fontSize: '0.8rem' }}>
            Classic Calzone - Ricotta, Mozzarella, Pepperoni, Sausage, Spinach
          </li>
        </ul>
      </div>
      <div className={Style.dayDiv}>
        <h4 style={{ margin: '1vh 0' }}>
          Thursday - BBQ Chicken Fiesta
        </h4>
        <ul style={{ margin: 0 }}>
          <li style={{ fontSize: '0.8rem' }}>
            BBQ Chicken Pizza: BBQ Sauce, Mozzarella, Grilled Chicken, Red Onions, Cilantro
          </li>
        </ul>
      </div>
      <div className={Style.dayDiv}>
        <h4 style={{ margin: '1vh 0' }}>
          Friday - Meat Lover's Feast
        </h4>
        <ul style={{ margin: 0 }}>
          <li style={{ fontSize: '0.8rem' }}>
            Meat Lovers Pizza: Tomato Sauce, Mozzarella, Pepperoni, Sausage, Bacon, Ham
          </li>
        </ul>
      </div>
    </div>
  );
}
