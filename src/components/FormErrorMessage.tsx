
interface Props {
  message: string;
}

export const FormErrorMessage = ( { message }: Props ) => {

  return (
    <div className="bg-rose-200 border-2 border-rose-400 py-2 px-2 rounded-lg">
      <p className="font-medium">{ message }</p>
    </div>
  );
};