function CategoryCard({ imagePath }: { imagePath: string }) {
  return <div><img src={imagePath} className="rounded-lg aspect-square object-cover  md:aspect-auto" /></div>;
}

export default CategoryCard;
