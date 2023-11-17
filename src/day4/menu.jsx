import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Menu = ({ activeCategory, handleAddToCart }) => {
  return (
    <div className="px-6 flex flex-wrap">
      <h1 className="text-2xl font-bold w-full ">{activeCategory.title}</h1>
      {activeCategory.items.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 justify-between"
        >
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                // alt="green iguana"
                height="70"
                width={40}
                image="https://tse2.mm.bing.net/th?id=OIP._amtVrnWIHD-wQXNk2kxKQHaLH&pid=Api&P=0&h=220.jpg"
              />
              <CardContent style={{ backgroundColor: "tan" }}>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{item.name} </p>
                  <p>$ {item.price}</p>
                  <button
                    className="  px-3 py-1 rounded-lg font-medium"
                    style={{ backgroundColor: "sandybrown" }}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Menu;
