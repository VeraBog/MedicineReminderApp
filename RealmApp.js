/*import Realm from "realm";
const app = new Realm.App({ id: "your-atlas-app-id-here" });
export default app;

realm.open(config).then((realm) => {
  realmRef.current = realm;
  const syncLinks = realm.objects("Link");
  let sortedLinks = syncLinks.sorted("name");
  setLinks([...sortedLinks]);

  // we observe changes on the Links, in case Sync informs us of changes
  // started in other devices (or the cloud)
  sortedLinks.addListener(() => {
    console.log("Got new data!");
    setLinks([...sortedLinks]);
  });
});


const createLink = (newLinkName, newLinkURL) => {

  const realm = realmRef.current;

  realm.write(() => {
    // Create a new link in the same partition -- that is, using the same user id.
    realm.create(
      "Link",
      new Link({
        name: newLinkName || "New Link",
        url: newLinkURL || "http://",
        partition: user.id,
      })
    );
  });
};*/


const deleteLink = (link) => {

  const realm = realmRef.current;

  realm.write(() => {
    realm.delete(link);
    // after deleting, we get the Links again and update them
    setLinks([...realm.objects("Link").sorted("name")]);
  });
};