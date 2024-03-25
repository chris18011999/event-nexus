import prismaInterface from "../interface";

export const queryAll = async ({withTags, ...params}: { withTags: boolean }) => {
    const result = await prismaInterface.event.findMany({
    include: {
      tags: withTags,
    },
    ...params
  });

  return result;
};
