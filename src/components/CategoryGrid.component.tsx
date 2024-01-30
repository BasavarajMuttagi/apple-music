import CategoryCard from "./CategoryCard.component";
const Folder =
  "https://raw.githubusercontent.com/BasavarajMuttagi/apple-music/main/src/assets/browsecategory/1040";
function CategoryGrid() {
  const imageNameArray: any = [
    "1040x346sr.webp",
    "1040x346sr (1).webp",
    "1040x346sr (2).webp",
    "1040x346sr (3).webp",
    "1040x346sr (4).webp",
    "1040x346sr (5).webp",
    "1040x346sr (6).webp",
    "1040x346sr (7).webp",
    "1040x346sr (8).webp",
    "1040x346sr (9).webp",
    "1040x346sr (10).webp",
    "1040x346sr (11).webp",
    "1040x346sr (12).webp",
    "1040x346sr (13).webp",
    "1040x346sr (14).webp",
    "1040x346sr (15).webp",
    "1040x346sr (16).webp",
    "1040x346sr (17).webp",
    "1040x346sr (18).webp",
    "1040x346sr (19).webp",
    "1040x346sr (20).webp",
    "1040x346sr (21).webp",
    "1040x346sr (22).webp",
    "1040x346sr (23).webp",
    "1040x346sr (24).webp",
    "1040x346sr (25).webp",
    "1040x346sr (26).webp",
    "1040x346sr (27).webp",
    "1040x346sr (28).webp",
    "1040x346sr (29).webp",
    "1040x346sr (30).webp",
    "1040x346sr (31).webp",
    "1040x346sr (32).webp",
    "1040x346sr (33).webp",
    "1040x346sr (34).webp",
    "1040x346sr (35).webp",
    "1040x346sr (36).webp",
    "1040x346sr (37).webp",
    "1040x346sr (38).webp",
    "1040x346sr (39).webp",
    "1040x346sr (40).webp",
    "1040x346sr (41).webp",
    "1040x346sr (42).webp",
    "1040x346sr (43).webp",
    "1040x346sr (44).webp",
    "1040x346sr (45).webp",
    "1040x346sr (46).webp",
    "1040x346sr (47).webp",
    "1040x346sr (48).webp",
    "1040x346sr (49).webp",
  ];

  return (
    <div className="no-scrollbar bg-[#1f1f1f] h-full overflow-y-auto gap-5 p-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {imageNameArray.map((eachImage: string) => (
        <CategoryCard key={eachImage} imagePath={`${Folder}/${eachImage}`} />
      ))}
    </div>
  );
}

export default CategoryGrid;
