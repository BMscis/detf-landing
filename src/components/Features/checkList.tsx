const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const List = ({text}) => (
  <p className="text-md mb-5 flex items-center font-medium text-primary dark:text-body-color md:text-lg">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);
export default function CheckList({lists}: {lists: string[]}) {
  const t = lists.slice(0, 3);
  const t2 = lists.slice(3, lists.length);
  const list1 = t.map((l, i) => <List text={l} key={i} />);
  const list2 = t2.map((l, i) => <List text={l} key={i} />);
  return (
    <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
      <div className=" mx-[-12px] flex flex-wrap">
        <div className="w-full px-3 ">{list1}</div>

        <div className="w-full px-3 ">{list2}</div>
      </div>
    </div>
  );
}
