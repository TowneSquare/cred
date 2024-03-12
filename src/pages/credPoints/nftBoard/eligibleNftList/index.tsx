import { useDispatch } from "react-redux";
import { toggleEligibleNftModal } from "../../../../state/dialog";
import NftCollection from "../../../../components/defi/nftCollection";
import "./index.css"

const EligibleNftList = () => {

  const dispatch = useDispatch();
  return (
    <div className="w-full pt-10 flex flex-col">
      <div className="flex justify-center md:justify-between md:px-8 md:h-7 mb-10">
        <p className="text-[20px] w-[270px] md:w-full md:text-[22px] font-bold text-center md:text-left">Eligible NFT collections</p>
        <img
          src="/credpoints/close.svg"
          className="absolute top-5 right-6 md:flex cursor-pointer w-8"
          onClick={(e) => dispatch(toggleEligibleNftModal(false))}
        />
      </div>
      <div className="flex flex-col px-4 md:px-1 font-Inter overflow-y-scroll overflow-hidden" id="tokenModal">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Aptomingos.svg"}
            text={"Aptomingos"}
            twitterLink={"https://twitter.com/Aptomingos"}
            globalLink={"https://aptomingos.io/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Mavrik.svg"}
            text={"Mavrik"}
            text_sm={"& Staking NFTs"}
            twitterLink={"https://twitter.com/MavrikOG"}
            globalLink={"https://www.eonlabz.com/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Monkeys.svg"}
            text={"Aptos Monkeys"}
            text_sm={"& Staking NFTs"}
            twitterLink={"https://twitter.com/AptosMonkeys"}
            globalLink={"https://www.aptosmonkeys.club/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/AptoRobots.svg"}
            text={"AptoRobos"}
            twitterLink={"https://twitter.com/AptoRobos"}
            globalLink={"https://www.aptorobos.com/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Pontem Space.svg"}
            text={"Pontem Space Pirates"}
            twitterLink={"https://twitter.com/PontemNetwork"}
            globalLink={"https://www.topaz.so/collection/Pontem-Space-Pirates-c46dd298b8"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Bruh Bears.svg"}
            text={"Bruh Bears"}
            text_sm={"& Staking NFTs"}
            twitterLink={"https://twitter.com/bruh_bears"}
            globalLink={"https://bruh.xyz/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/aptos toad overload.svg"}
            text={"Aptos Toad Overload"}
            twitterLink={"https://twitter.com/aptoads"}
            globalLink={"https://aptoads.io/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Apooks.svg"}
            text={"Spooks"}
            twitterLink={"https://twitter.com/SpooksLabs"}
            globalLink={"https://spooks.land/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/pontem dark ages.svg"}
            text={"Pontem Dark Ages"}
            twitterLink={"https://twitter.com/PontemNetwork"}
            globalLink={"https://www.topaz.so/collection/Pontem-Dark-Ages-7fef9d50cd"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/netzcuty.svg"}
            text={"NetzCuty"}
            twitterLink={"https://twitter.com/NetzFamily"}
            globalLink={"https://www.netzfamily.xyz/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/netzjoy.svg"}
            text={"NetzJoy"}
            twitterLink={"https://twitter.com/NetzFamily"}
            globalLink={"https://www.netzfamily.xyz/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/lions.svg"}
            text={"Proud Lions Club"}
            twitterLink={"https://twitter.com/proudlionsclub"}
            globalLink={"https://www.proudlionsclub.com/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Creature.svg"}
            text={"Aptos Creature"}
            twitterLink={"https://twitter.com/AptosCreature"}
            globalLink={"https://aptoscreature.xyz/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/Mania.svg"}
            text={"Mancini Mania"}
            twitterLink={"https://twitter.com/mancinixo"}
            globalLink={"https://www.mancinix.io/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/nruh.svg"}
            text={"Nruh Bers"}
            twitterLink={"#"}
            globalLink={"https://www.mercato.xyz/aptos/collection/0xba3ece85f7c2d1451b5e5da4ddccca14b93c6b0b248e55f4b39adcbdaf355415?tab=items&bottomTab=trades"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/observer.svg"}
            text={"Observer"}
            twitterLink={"https://twitter.com/NickoleNFT"}
            globalLink={"https://linktr.ee/nickole_"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/realm.svg"}
            text={"Realm of Personas"}
            twitterLink={"https://twitter.com/SereneForest_"}
            globalLink={"https://www.mercato.xyz/aptos/collection/0xa3b8b91e179eceebf77bb558a05aa2a60455e28df5517b71c87ca1681e91a835?tab=mint&mintTokenId=2e179b85-6df5-4821-84c9-82b531d99c3b&bottomTab=trades"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/messages.svg"}
            text={"Messages"}
            twitterLink={"https://twitter.com/NickoleNFT"}
            globalLink={"https://linktr.ee/nickole_"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/micro.svg"}
            text={"Micro (Bacteria) Aliens"}
            twitterLink={"https://twitter.com/terakiart"}
            globalLink={"https://terakiart.xyz"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/pandato.svg"}
            text={"Pandato"}
            twitterLink={"https://twitter.com/pandatonft"}
            globalLink={"#"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/gui lion.svg"}
            text={"GUI Lion"}
            twitterLink={"https://twitter.com/proudlionsclub"}
            globalLink={"https://www.proudlionsclub.com/"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/ooga.svg"}
            text={"CHOMBLES"}
            twitterLink={"https://twitter.com/OogaRepublic"}
            globalLink={"https://lynkfire.com/OogaRepublic"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/fearune.svg"}
            text={"Faerune (Celestines)"}
            twitterLink={"https://twitter.com/FaeruneWorld"}
            globalLink={"#"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/sushi.svg"}
            text={"Sushi Mania"}
            twitterLink={"https://twitter.com/IamSushiSheriff"}
            globalLink={"https://www.mercato.xyz/aptos/collection/0xdd4150980c421573771a2c049b97eedd89a410989e5b98048aac881b3821567b?bottomTab=trades&tab=items"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/qribbles.svg"}
            text={"Qribbles"}
            twitterLink={"#"}
            globalLink={"https://sshift.xyz/#qribbles"}
          />
          <NftCollection
            imgUrl={"/credpoints/nft_collections/koalas.svg"}
            text={"Relocated Koalas"}
            twitterLink={"https://twitter.com/RelocatedKoalas"}
            globalLink={"https://www.relocatedkoalas.com/"}
          />
          <div className="mb-6">
            <NftCollection
              imgUrl={"/credpoints/nft_collections/aptos girl.svg"}
              text={"Aptos Girls"}
              twitterLink={"https://twitter.com/AptosGirls_nft"}
              globalLink={"https://wapal.io/collection/happy-movers"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibleNftList;
